'use client'

import { useState } from 'react'
import TextInput from '../input/text-input'

type AddTextListFormProps = {
  texts: string[]
  addText: (text: string) => void
  removeText: (idx: number) => void
  buttonLabel: string
  inputLabel: string
  placeholder: string
}

export default function AddTextListForm() {
  const [texts, changeTexts] = useState<string[]>([])

  const addText = (text: string) => {
    changeTexts([...texts, text])
  }

  const removeText = (idx: number) => {
    changeTexts(texts.filter((_, i) => i !== idx))
  }

  return (
    <>
      <div className="flex flex-col">
        {texts.map((text, idx) => (
          <p key={`text${idx}`}>{text}</p>
        ))}
      </div>
      <form action="" className="flex items-center gap-3">
        <TextInput
          required
          name="text"
          id="text"
          placeholder="Ton nom"
          label="Ton nom"
          additionalClasses="input-primary"
        />
        <button type="submit" className="btn btn-accent w-min">
          Ajouter
        </button>
      </form>
    </>
  )
}
