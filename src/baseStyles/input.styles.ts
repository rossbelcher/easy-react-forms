import styled from 'styled-components';

const base = `
    padding: 0.5em;
    background-color: #FFFFFF;
    border: 1px solid #d6d6d6;
    transition: all ease 0.5s;
    outline: none;

    &.error {
        border: 1px solid red;
    }

    &:focus {
        border-color: black;
    }
`

export const BaseInputStyle = styled.input`
    ${base}
`;

export const BaseCalendarStyle= styled.div`
    .DateInput_input {
        padding: 0;
        font-size: inherit;
        width: 7em;

        &:focus + .SingleDatePickerInput {
            border-color: black;
        }
    }

    .SingleDatePickerInput_calendarIcon {
        margin: 0 5px 0 5px;
        padding: 5px;
    }

    .DateInput_input__focused {
        border-bottom: none;
    }

`;

export const BaseLabelStyle = styled.label`
    margin-bottom: 0.5rem;
    display: block;

    &.required::after {
        content: ' *';
        color: red;
    }
`

export const BaseErrorMessage = styled.div`
    color: red;
    font-size: 0.9em;
`

export const BaseTextareaStyle = styled.textarea`
    ${base}
`;