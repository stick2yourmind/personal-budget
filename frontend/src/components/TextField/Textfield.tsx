import React, { useRef, useEffect } from 'react'
import { useField, ErrorMessage } from 'formik'
import TextfieldStyle from './TextfieldStyle'

export interface TextFieldProps{
  disabled?:boolean,
  focus?: boolean,
  info?: boolean,
  inputmode?: string,
  label: string,
  name: string,
  placeholder?: string,
  type: string,
  value?: string
}

const TextField:React.FC<TextFieldProps> = ({
  name, type, placeholder, focus, value, label, info = false,
  disabled = false
}) => {
  const [field, meta] = useField({ disabled, name, placeholder, type, value })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focus) inputRef.current?.focus()
  }, [])
  return (
    <TextfieldStyle>
        {info && <label className='labelField' htmlFor={field.name}>{label}</label> }
        <input className={`inp-field ${meta.touched && meta.error ? 'isInvalid' : ''} ` }
            {...field} name={name} type={type} placeholder={placeholder || ''}
            ref={focus ? inputRef : undefined} autoComplete='off' value={value || undefined}
            disabled={disabled}
        />
        <div className='error'>
          <ErrorMessage className='error__msg' name={field.name} component="p" />
        </div>
    </TextfieldStyle>
  )
}

export default TextField
