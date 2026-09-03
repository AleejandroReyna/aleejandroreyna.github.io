'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useFormFields, useField, TextInput } from '@payloadcms/ui'
import { Lock, RefreshCw, Unlock } from 'lucide-react'

// Se reutiliza la misma funcion que el hook de servidor para que el slug que
// se ve en el admin sea exactamente el que se guarda.
import { format as formatSlug } from '@/utils/formatSlug'

export const SlugComponent: React.FC<any> = ({ path, label, required }) => {
    const { value, setValue } = useField<string>({ path })
    const [isLocked, setIsLocked] = useState(true)

    const nameField = useFormFields(([fields]) => fields.name?.value as string)
    const titleField = useFormFields(([fields]) => fields.title?.value as string)
    const roleField = useFormFields(([fields]) => fields.role?.value as string)
    const emailField = useFormFields(([fields]) => fields.email?.value as string)
    const altField = useFormFields(([fields]) => fields.alt?.value as string)

    const fallbackValue = nameField || titleField || roleField || emailField || altField

    // Sólo se genera cuando todavía no hay slug para este locale: una URL ya
    // publicada no debe cambiar porque se retoque el título. Como el campo es
    // localizado, al abrir el documento en español el valor viene vacío y se
    // genera ahí su propio slug, una única vez e independiente del inglés.
    useEffect(() => {
        if (!value && fallbackValue) {
            setValue(formatSlug(fallbackValue))
        }
    }, [value, fallbackValue, setValue])

    const regenerate = useCallback(() => {
        if (fallbackValue) {
            setValue(formatSlug(fallbackValue))
        }
    }, [fallbackValue, setValue])

    const buttonStyle: React.CSSProperties = {
        padding: '0.5rem',
        cursor: 'pointer',
        border: '1px solid #ccc',
        background: '#fff',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    }

    return (
        <div style={{ marginBottom: '1rem' }}>
            <label className="field-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ flexGrow: 1 }}>
                    <TextInput
                        path={path}
                        value={value || ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                        readOnly={isLocked}
                    />
                </div>
                <button
                    type="button"
                    onClick={regenerate}
                    disabled={!fallbackValue}
                    style={{ ...buttonStyle, opacity: fallbackValue ? 1 : 0.5 }}
                    title="Regenerate from title"
                >
                    <RefreshCw size={16} />
                </button>
                <button
                    type="button"
                    onClick={() => setIsLocked(!isLocked)}
                    style={buttonStyle}
                    title={isLocked ? 'Unlock to edit' : 'Lock field'}
                >
                    {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                </button>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Generated once from the title. Use the refresh button to rebuild it, or unlock to edit
                manually. Changing the title never rewrites an existing slug.
            </p>
        </div>
    )
}

export default SlugComponent
