'use client'

import React, { useEffect, useState } from 'react'
import { useFormFields, useField, TextInput } from '@payloadcms/ui'
import { Lock, Unlock } from 'lucide-react'

export const SlugComponent: React.FC<any> = ({ path, label, required }) => {
    const { value, setValue } = useField<string>({ path })
    const [isLocked, setIsLocked] = useState(true)

    const nameField = useFormFields(([fields]) => fields.name?.value as string)
    const titleField = useFormFields(([fields]) => fields.title?.value as string)
    const roleField = useFormFields(([fields]) => fields.role?.value as string)
    const emailField = useFormFields(([fields]) => fields.email?.value as string)
    const altField = useFormFields(([fields]) => fields.alt?.value as string)

    const fallbackValue = nameField || titleField || roleField || emailField || altField

    const formatSlug = (val: string) =>
        val
            .replace(/\s+/g, '_')
            .replace(/[^\w-]+/g, '')
            .toLowerCase()

    useEffect(() => {
        if (isLocked && fallbackValue) {
            const newSlug = formatSlug(fallbackValue)
            if (newSlug !== value) {
                setValue(newSlug)
            }
        }
    }, [isLocked, fallbackValue, value, setValue])

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
                    onClick={() => setIsLocked(!isLocked)}
                    style={{
                        padding: '0.5rem',
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                        background: '#fff',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black'
                    }}
                    title={isLocked ? 'Unlock to edit' : 'Lock to auto-generate'}
                >
                    {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                </button>
            </div>
            {isLocked && (
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                    Auto-generated. Unlock to edit manually.
                </p>
            )}
        </div>
    )
}

export default SlugComponent
