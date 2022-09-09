import React, { useContext, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/en-gb';
import i18n from '../../utils/i18n';
import { createMomentFromValue, DEFAULT_DATE_FORMAT, isValidDate, resetTime, toDate } from '../../utils/date-helpers';
import { useFormUpdate } from '../../hooks/formState';
import { useRecoilState } from 'recoil';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { createUUID } from '../../utils/data-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';
import { BaseCalendarStyle, BaseErrorMessage, BaseLabelStyle } from '../../baseStyles/input.styles';
import { isNullOrWhitespace } from '../../utils/text-helpers';
import { BaseThirdPartyCalendarStyle } from './EasyCalendarThirdParty.style';

interface ComponentProps {
  model?: string;
  onChange?: Function;
  inputName?: string;
  value?: any;
  maxDate?: any;
  minDate?: any;
  required?: boolean;
  label?: string;
  id?: string;
  months?: number;
  unlink?: boolean;
  placeholder?: string;
  calendarProps?: any;
  className?: string;
}

const EasyCalendar = ({
  model,
  onChange,
  inputName,
  value,
  maxDate,
  minDate,
  required,
  label,
  id,
  months,
  unlink,
  placeholder,
  className,
  calendarProps = {}
}: ComponentProps) => {
  const context = useContext(FormContext);
  const uuid = useRef(createUUID());
  const formId = unlink || !context ? null : context;
  const nameToUse = inputName ? inputName : model;
  const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
  const setComponentData = useFormUpdate(formId, model);
  const { error, internalValue } = componentState;
  const valueToUse = value || internalValue;
  const hasLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (model) {
      const rawValue = value;
      const date = toDate(resetTime(rawValue));
      const [valid, error] = validate(false, date);
      setComponentData(date, valid);
    }
  }, [])

  useEffect(() => {
    if (hasLoaded.current) {
      const valueDate = toDate(resetTime(value));
      const [valid, error] = validate(true, valueDate);
      setComponentData(value, valid);
    } else {
      hasLoaded.current = true;
    }
  }, [value, minDate, maxDate])

  const setValue = (newDate) => {
    const value = newDate ? createMomentFromValue(newDate).utcOffset("+00:00", true) : undefined;
    const [valid, newError] = validate(false, value);
    if (model && formId) {
      setComponentData(value, valid);
    }

    setComponentState({ error: newError, internalValue: value });
    if (onChange) onChange(value);
  }

  const validate = (setState: boolean = true, date: string | Date | moment.Moment | null = null): [boolean, string] => {
    if (!date && required) {
      const error = i18n('Required');
      if (setState) setComponentState({ error, internalValue });
      if (setState) setValue(null); // force remove date, we don't get a change event if date is deleted.
      if (setState) setComponentData(date, false);
      return [false, error];
    } if (!isFieldValid(date)) {
      const error = 'This is not a valid date';
      if (setState) setComponentState({ error, internalValue  });
      if (setState) setComponentData(date, false);
      return [false, error];
    } else if (minDate && resetTime(createMomentFromValue(date)).utcOffset("+00:00", true).isBefore(resetTime(createMomentFromValue(minDate)))) {
      const error = `Date must be after: ${moment(minDate).format(DEFAULT_DATE_FORMAT)}`;
      if (setState) setComponentState({ error, internalValue  });
      if (setState) setComponentData(date, false);
      return [false, error];
    } else if (maxDate && resetTime(createMomentFromValue(date)).isAfter(resetTime(createMomentFromValue(maxDate)))) {
      const error = `Date must be before: ${moment(maxDate).format(DEFAULT_DATE_FORMAT)}`;
      if (setState) setComponentState({ error, internalValue  });
      if (setState) setComponentData(date, false);
      return [false, error];
    } else {
      if (setState) setComponentState({ error: null, internalValue  });
      if (setState) setComponentData(date, true);
      if (setState) setValue(createMomentFromValue(date));
      return [true, null];
    }

  }

  const isFieldValid = (value: any) => {
    if (required && isValidDate(value)) {
      return true;
    } else if (!required && (!value || isValidDate(value))) {
      return true;
    }

    return false;
  }

  const parsedMinDate = isNullOrWhitespace(minDate) ? null : toDate(minDate);
  const parsedMaxDate = isNullOrWhitespace(maxDate) ? null : toDate(maxDate);
  const parsedValue = valueToUse ? createMomentFromValue(valueToUse) : null;

  return (
    <div className={className}>
      <BaseThirdPartyCalendarStyle />
      <FormAttibuteContext.Consumer>
        {attr => (
          <BaseCalendarStyle error={error}>
            {label &&
              <BaseLabelStyle className={required ? 'required' : ''} htmlFor={id ? id : nameToUse}>
                {label}
              </BaseLabelStyle>
            }

            <DatePicker
              selected={parsedValue?.toDate()}
              className={error ? 'error' : ''}
              onChange={setValue}
              onClose={setValue}
              dateFormat={'dd/MM/yyyy'}
              disabled={attr.disabled}
              monthsShown={months ? months : 2}
              minDate={parsedMinDate}
              maxDate={parsedMaxDate}
              placeholder={placeholder}
              {...calendarProps}
            />

            {error &&
              <BaseErrorMessage>
                {error}
              </BaseErrorMessage>
            }
          </BaseCalendarStyle>
        )}
      </FormAttibuteContext.Consumer>
    </div>
  );
};

export default EasyCalendar;

