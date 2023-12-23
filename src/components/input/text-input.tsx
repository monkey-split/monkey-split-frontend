export type TextInputProps = {
  id?: string
  name?: string
  label?: string
  required?: boolean
  type?: string
  placeholder?: string
  dataFormType?: string
  additionalClasses?: string
  formControlLabel?: string
}

export default function TextInput({
  placeholder = 'Type here',
  label = 'Label',
  required = true,
  type = 'text',
  name = '',
  dataFormType = 'other',
  id = '',
  additionalClasses = '',
  formControlLabel = '',
}: TextInputProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </div>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`input input-bordered ${additionalClasses}`}
        data-form-type={dataFormType}
      />
      <div className="label">
        <span className="label-text-alt">{formControlLabel}</span>
        {/* <span className="label-text-alt">Bottom Right label</span> */}
      </div>
    </label>
  )
}
