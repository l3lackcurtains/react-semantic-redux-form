import React from 'react';
import {
  Form,
  Input as InputComponent,
  Radio as RadioComponent,
  Checkbox as CheckboxComponent,
  Select as SelectComponent,
  TextArea as TextAreaComponent} from 'semantic-ui-react';


export const InputField = ({ input, label, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ?<span style={{color:'#9F3A38'}}>{error}</span>: null}
  </Form.Field>
)

export const Input = ({input, required, meta: { touched, error }, ...rest}) => (
  <InputComponent required={required} {...input} {...rest} />
)

export const LabelInputField = ({input, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ?<span style={{color:'#9F3A38'}}>{error}</span>: null}
  </Form.Field>
)

export const TextAreaField = ({input, label, required, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <TextAreaComponent required={required} {...input} {...rest} />
    {touched && error ? <span style={{color:'#9F3A38'}}>{error}</span> : null}
  </Form.Field>
)

export const TextArea = ({ input, required, meta: { touched, error }, ...rest }) => (
  <TextAreaComponent required={required} {...input} {...rest} />
);

export const SelectField = ({ input, label, required, options, meta:{touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field error={touched && error?true:false} required={required}>
    <label>{label}</label>
    <SelectComponent search value={input.value} required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)} {...custom}/>
    {touched && error ? <span style={{color:'#9F3A38'}}>{error}</span> : null}
  </Form.Field>
)

export const Select = ({ input, required, options, meta: { touched, error }, ...rest }) => (
  <SelectComponent search value={input.value} required={required}
    options={options}
    onChange={(event, data) => input.onChange(data.value)} {...rest}/>
)

export const ToggleField = ({input, label, defaultChecked}) => ( //eslint-disable-line
  <Form.Field control={RadioComponent} toggle label={label}
    checked={input.value ? true : false}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(!data.checked)}/>
);

export const Toggle = ({input, label, defaultChecked}) => ( //eslint-disable-line
  <RadioComponent toggle label={label}
    checked={input.value ? true : false}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(!data.checked)} />
);

export const Radio = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <RadioComponent label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const RadioField = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field control={RadioComponent} label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const Checkbox = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <CheckboxComponent label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);

export const CheckboxField = ({input, label, meta: {touched, error}, ...custom}) => ( //eslint-disable-line
  <Form.Field control={CheckboxComponent} label={label}
    checked={input.value ? true : false}
    onClick={(event, data) => input.onChange(!data.checked)} {...custom}/>
);
