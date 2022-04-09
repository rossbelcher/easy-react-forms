# Easy React Forms
Forms with validation in react. The idea of this package is to make form building as 'easy' as possible.
This means handling validation and dealing with form value changes.

Storybook: https://rossbelcher.github.io/easy-react-forms/

## Setting up
Once you have installed the package you will need to wrap your app in either a recoil.js root (RecoilRoot) or import the forms consumer (EasyFormConsumer). 

```
<EasyFormConsumer>
    // app code
</EasyFormConsumer>
```


## Creating your first form
With easy forms you can have standlone components that you can setup with onChange events or you can use the FormWrapper.
The FormWrapper handles onChange events for you and gives you an output of the the entire form state.
See example below:

```
const MyForm = () => {
  return (
    <FormWrapper onUpdate={(formDetails) => console.log(formDetails)}>
      {({ id, valid }) => (
        <>
          <EasyTextInput
            model='myProperty'
            label='My Text Input:'
            required />
        </>
      )}
    </FormWrapper>
  );
};

export default MyForm;
```

So with this example I have 1 text input with a model property. The model property is required when using it in a FormWrapper.
It tells the FormWrapper what to name the property when it gives back the form state as a whole.
In the example we also the the onUpdate on the FormWrapper itself. This will fire every time there is a value change in any of the form elements.
The console log it is outputting in this exampe will look like this:

```
{
    myProperty: ''
}
```

## Classes and Styled components
All components accept className prop which will work with most styling providers including styled components as per example below.
Below is an example style that targets the label, input and error message (plus required class on label, error on input).

```
const StyledTextInput = styled(EasyTextInput)`
  input {

  }

  label {

  }

  .error-message {

  }

  .error {

  }

  .required {

  }
`;
```

## Availiable elements

### EasyTextInput
Props:
```
model?: string;
onChange?: Function;
onBlur?: Function;
onFocus?: Function;
inputName?: string;
value?: any;
required?: boolean;
label?: string;
id?: string;
min?: number;
max?: number;
disabled?: boolean;
testingId?: string; // adds a data-e2e-id tag on the element for automation tests.
defaultValue?: any;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
alphanumeric?: boolean;
validateOnLoad?: boolean;
placeholder?: string;
className?: string;
```

### EasyCalendar
The calendar uses the airBnB react calendar in the background. You can pass a list of props to the calendar using "calendarProps".
Props:
```
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
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
placeholder?: string;
calendarProps?: any;
className?: string;
```

### EasyCheckbox
Props:
```
model?: string;
onChange?: Function;
inputName?: string;
checked?: any;
required?: boolean;
label?: string;
id?: string;
labelClass?: string;
disabled?: boolean;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
className?: string;
```

### EasyCurrencyInput
Props:
```
model?: string;
onChange?: Function;
onBlur?: Function;
onFocus?: Function;
inputName?: string;
value?: any;
required?: boolean;
label?: string;
id?: string;
min?: number;
max?: number;
disabled?: boolean;
wholeNumbersOnly?: boolean;
testingId?: string; // adds a data-e2e-id tag on the element for automation tests.
defaultValue?: any;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
validateOnLoad?: boolean;
placeholder?: string;
className?: string;
```

### EasyNumberInput
Props:
```
model?: string;
onChange?: Function;
onBlur?: Function;
onFocus?: Function;
inputName?: string;
value?: any;
required?: boolean;
label?: string;
id?: string;
decimalPlaces?: number;
min?: number;
max?: number;
disabled?: boolean;
wholeNumbersOnly?: boolean;
testingId?: string; // adds a data-e2e-id tag on the element for automation tests.
defaultValue?: any;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
validateOnLoad?: boolean;
placeholder?: string;
className?: string;
```

### EasyRadioInput
Props:
```
model?: string;
onChange?: Function;
checked?: boolean;
required?: boolean;
label?: string;
id: string;
value: string;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
inputName?: string;
className?: string;
```

### EasyTextarea
Props:
```
model?: string;
onChange?: Function;
inputName?: string;
value?: any;
required?: boolean;
rows?: number;
label?: string;
id?: string;
placeholder?: string;
disabled?: boolean;
maxLength?: number;
minLength?: number;
unlink?: boolean; // Detaches the input from the FormWrapper and excludes it from the onUpdate data on the FormWrapper.
testingId?: string; // adds a data-e2e-id tag on the element for automation tests.
className?: string;
```

### FormWrapper
Props:
```
className?: string;
children?: any;
onUpdate?: Function; // function that outputs formData and isFormValid properties
formRef?: RefObject<HTMLFormElement>; // Create ref for the wrapper element
renderWrapperAsDiv?: boolean; // instead of the wrapper being a <form> it will render a <div>
formId?: string; // Custom form ID, if omitted will be auto generated
disabled?: boolean; // Disables every input on form (useful for when in a saving state)
```