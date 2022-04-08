import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { BaseErrorMessage, BaseInputStyle, BaseLabelStyle } from '../../baseStyles/input.styles';
import { FormControlState } from '../../controllers/easyFormConsumer';
import { useFormUpdate } from '../../hooks/formState';
import { createUUID } from '../../utils/data-helpers';
import i18n from '../../utils/i18n';
import { isNullOrWhitespace } from '../../utils/text-helpers';
import { FormAttibuteContext, FormContext } from '../FormWrapper';

interface TypeaheadProps {
  model?: string;
  onChange?: Function;
  inputName?: string;
  value?: any;
  required?: boolean;
  placeholder?: string;
  label?: string;
  id?: string;
  items: TypeaheadDataItem[];
  disabled?: boolean;
  requiredLength?: number;
  onTextInput?: Function;
  identifier?: string;
  unlink?: boolean;
  allowCustomValue?: boolean;
  openOnFocus?: boolean;
  testingId?: string;
}

export interface TypeaheadDataItem {
  value: string;
  text?: any;
  rawTextValue?: string;
  section?: string;
  extraInfo?: any;
}

interface TypeaheadSection {
  items: TypeaheadDataItem[];
  name: string;
}

const NoResults = styled.li`
  padding: 0.5rem;
`;

const SectionTitle = styled.li`
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  background-color: #FFFFFF;
  color: #000;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  min-width: 20rem;
  text-align: left;
  margin-top: 0.5rem;
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .fas {
    margin-right: 1rem;
    color: #006f64;
  }

  .item {
    padding: 1rem;
    transition: all ease 0.5s;
    cursor: pointer;

    &:hover {
      background-color: #006f64;
      color: #FFFFFF;

      .fas {
        color: #FFFFFF;
      }
    }
  }
`;

const EasyTypeahead = (props: TypeaheadProps) => {
  const {
    model,
    onChange,
    inputName,
    value,
    required,
    placeholder,
    label,
    id,
    items,
    disabled,
    requiredLength = 2,
    onTextInput,
    identifier,
    unlink,
    allowCustomValue,
    openOnFocus,
    testingId,
  } = props;
  const context = useContext(FormContext);
  const uuid = useRef(createUUID());
  const formId = unlink || !context ? null : context;
  const [componentState, setComponentState] = useRecoilState(FormControlState(formId || uuid.current, model || inputName));
  const setComponentData = useFormUpdate(formId, model);
  const typeaheadDom = useRef<any>();
  const typeaheadInput = useRef<any>();
  const typeaheadPopup = useRef<any>();
  const { error, selected, hasClickedOut, interacted, searchValue, cursor, showAll, name, open } = componentState;
  const [prevProps, setPrevProps] = useState(props);
  const isFocused = interacted ? !hasClickedOut : false;
  const filteredItems = items.filter(x => isMatch(x));
  const nameToUse = name ? name : inputName ? inputName : model;

  useEffect(() => {
    document.body.addEventListener('click', evt => detectClickEvents(evt));
    document.body.addEventListener('keydown', evt => detectKeyEvents(evt));
    const valid: boolean = !required || disabled;

    if (!isNullOrWhitespace(value) && allowCustomValue) {
      setCustomValue(value);
    } else if (formId && model) {
      if (!isNullOrWhitespace(value)) {
        const item = items.find(x => x.value?.toLowerCase() === value?.toLowerCase())
        if (item) {
          setValue(item, true);
        }
      } else {
        setComponentData(value ? value : selected, valid);
      }
    }
  }, [])

  useEffect(() => {
    if (formId && model) {
      const valid: boolean = !required || !!disabled;
      if (!allowCustomValue) setComponentData(selected, valid ? true : !!error);
    }
  }, [disabled])

  useEffect(() => {
    const needsRevalidation: boolean = prevProps.required !== required || prevProps.disabled !== disabled;
    if (needsRevalidation || JSON.stringify(items) !== JSON.stringify(prevProps.items) || prevProps.value !== value && !isFocused) {
      const item = items.find(x => x.value?.toLowerCase() === value?.toLowerCase())

      if (item) {
        setValue(item, true);
      } else if (!isNullOrWhitespace(value) && allowCustomValue) {
        setCustomValue(value);
      } else {
        validate('', true, false, false, true);
      }
    }
    setPrevProps(props)
  })

  useEffect(() => {
    setValue({ value: '', text: '' }, true).then(() => {
      if (prevProps.disabled && !disabled && required && formId && model) {
        setComponentData(undefined, false);
      } else if (!selected && !!required && formId && model) {
        setComponentData(undefined, false);
      }
    })
  }, [identifier])

  const setValue = async (item: TypeaheadDataItem, clickOut: boolean) => {
    if (selected === item.value) return;

    if (model && formId) {
      setComponentData(item.value, true);
    }

    if (onChange) {
      onChange(item);
    }

    setComponentState({
      ...componentState,
      searchValue: getTextValue(item),
      selected: allowCustomValue ? getTextValue(item) : item.value,
      cursor: undefined,
      open: false,
      showAll: false,
      hasClickedOut: clickOut ? true : hasClickedOut,
      error: null,
    });
  }

  const getTextValue = (item: TypeaheadDataItem) => {
    return item.rawTextValue ? item.rawTextValue : (item.text ? item.text : item.value);
  }

  const setCustomValue = async (value: string, setState: boolean = true) => {
    if (model && formId) {
      setComponentData(value, true);
    }
    const newState = {
      ...componentState,
      searchValue: value,
      selected: value,
      cursor: undefined,
      error: null,
    };
    if (setState) setComponentState(newState);
    return newState;
  }

  const validate = (value, altered, setvalue, blur = false, updateForm = true, setState: boolean = true): string => {
    let error = null;
    if (interacted && !disabled && !selected && ((!!required && altered && hasClickedOut) || blur && !!required)) {
      error = 'Required';
      if (setState) setComponentState({ ...componentState, error });
      if (model && formId) {
        if (updateForm) setComponentData('', false);
      }
    } else {
      if (setState) setComponentState({ ...componentState, error: null })
      if (model && formId) {
        if (updateForm) setComponentData(selected, !required);
      }
    }

    const stateValue = value === null ? searchValue : value;
    const newSearchValue = setvalue ? stateValue : searchValue;
    if (setvalue) setComponentState({ ...componentState, selected: '', newSearchValue, altered })
    return error;
  }

  const textChange = (value) => {
    if (onTextInput) onTextInput(value);
    let nextStateUpdate = { open: true, interacted: true, cursor: undefined, searchValue: value };
    if (!isNullOrWhitespace(value) && !allowCustomValue) setComponentData('', false);
    if (allowCustomValue) {
      nextStateUpdate = {
        ...nextStateUpdate,
        ...setCustomValue(value, false),
      }
    }
    const error = validate(value, true, true, false, false, true);
    nextStateUpdate = {
      ...componentState,
      ...nextStateUpdate,
      error,
    };
    setComponentState(nextStateUpdate)
  }

  const displayData = (): TypeaheadSection[] => {
    const sections: TypeaheadSection[] = [];
    filteredItems.forEach(item => {
      const section = sections.find(x => x.name === item.section);
      if (section) {
        section.items.push(item);
      } else {
        sections.push({
          name: item.section,
          items: [item]
        })
      }
    });
    return sections;
  }

  const detectClickEvents = (event: MouseEvent) => {
    const isClickInside = typeaheadDom.current ? typeaheadDom.current.contains(event.target) : false;
    const isClickInsidePopup = typeaheadPopup.current ? typeaheadPopup.current.contains(event.target) : false;
    if (isClickInsidePopup) return;
    if (!isClickInside) {
      let newError = error;
      if (open && !allowCustomValue) {
        newError = validate(typeaheadInput.current.value, true, false, true, false);
      }
      setComponentState({ ...componentState, open: false, hasClickedOut: true, showAll: false, error: newError });
    } else if (!interacted) {
      setComponentState({ ...componentState, interacted: true, hasClickedOut: false })
    }
  }

  const detectKeyEvents = (e: KeyboardEvent) => {
    if (open) {
      if (cursor === undefined) {
        setComponentState({ ...componentState, cursor: 0 })
      }

      const key = e.which || e.keyCode
      if (key === 13) {
        e.preventDefault();
        const item = filteredItems[cursor]
        setValue(item, true)
      } else if (key === 38) {
        e.preventDefault();
        var currentIndex = cursor
        currentIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex
        const item = filteredItems[currentIndex]
        setComponentState({ ...componentState, cursor: currentIndex, selected: item.value })
      } else if (key === 40) {
        e.preventDefault();
        var currentIndex = cursor
        currentIndex = currentIndex !== (items.length - 1) ? currentIndex + 1 : currentIndex
        const item = filteredItems[currentIndex]
        setComponentState({ ...componentState, cursor: currentIndex, selected: item.value })
      } else if (key === 9) {
        const item = filteredItems[cursor]
        setValue(item, true)
      }
    }
  }

  function isMatch(x: TypeaheadDataItem) {
    if (!searchValue) return true;
    const value = x.rawTextValue ? x.rawTextValue : (x.text ? x.text : x.value);
    return value ? value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 : value.indexOf(searchValue) > -1;
  }

  return (
    <>
    <FormAttibuteContext.Consumer>
        {attr => (
          <div ref={typeaheadDom} style={{ width: '100%', position: 'relative' }}>
            {label &&
              <BaseLabelStyle required={required} htmlFor={id ? id : nameToUse}>
                {label}
              </BaseLabelStyle>
            }
            <BaseInputStyle
              ref={typeaheadInput}
              type='text'
              error={error}
              placeholder={placeholder}
              name={nameToUse}
              id={id ? id : nameToUse}
              value={searchValue ? searchValue : ''}
              data-e2e-id={testingId ? testingId : (id ? id : nameToUse)}
              required={required}
              disabled={disabled || attr.disabled}
              autoComplete='off'
              onFocus={openOnFocus ? () => setComponentState({ showAll: true, open: true, ...componentState }) : null}
              onChange={(e) => textChange(e.target.value)} />

            {(showAll || searchValue) && open && (showAll || searchValue.length > requiredLength) && items &&
              <DropdownWrapper ref={typeaheadPopup}>
                <ul>
                  {displayData().length == 0 &&
                    <NoResults>Sorry, there are no results for your search.</NoResults>
                  }
                  {displayData().map((section, sectionIndex) => {
                    return (
                      <React.Fragment key={'section-' + sectionIndex}>
                        {!isNullOrWhitespace(section.name) &&
                          <SectionTitle>{section.name}</SectionTitle>
                        }
                        {section.items.map((item, index) => (
                          <li key={item.value + ' - ' + index} className={(index === 0 && cursor === undefined) || (selected === item.value) ? 'item selected' : 'item'} onClick={() => setValue(item, true)}>
                            <span>
                              {item.text ? item.text : item.value}
                            </span>
                          </li>
                        ))}
                      </React.Fragment>
                    )
                  })}
                </ul>
              </DropdownWrapper>
            }

            {error &&
              <BaseErrorMessage>
                {i18n(error)}
              </BaseErrorMessage>
            }
          </div>
        )}
      </FormAttibuteContext.Consumer>
    </>
  );
};

export default EasyTypeahead;