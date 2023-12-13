export type TextAreaInput = {
  placeholder?: string
  label?: string
  required?: boolean
  name?: string
  dataFormType?: string
  id?: string
  additionalClasses?: string
  formControlLabel?: string
}

export default function TextArea({
  placeholder = 'Type here',
  label = 'Label',
  required = true,
  name = '',
  dataFormType = 'other',
  id = '',
  additionalClasses = '',
  formControlLabel = '',
}: TextAreaInput) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </div>
      <textarea
        id={id}
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
