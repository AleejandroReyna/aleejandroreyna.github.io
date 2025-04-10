'use client'

import { useState, useId } from "react"

export const Form = () => {
  const [ items, setItems ] = useState<string[]>(['all'])
  const formId = useId()

  const toggleItem = (item: string) => {
    setItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter(i => i !== item)
      } else {
        return [...prev, item]
      }
    })
  }

  const checkIfItemChecked = (item: string) => {
    return items.includes(item)
  }
 
  return (
    <aside>
      <p className="mb-2">Role:</p>

      <form action="#">
        <fieldset className="mb-1">
          <label htmlFor={`${formId}-all`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('all')} 
              onChange={() => toggleItem('all')} 
              className="checkbox checkbox-neutral" />{' '}
            All
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-frontend`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('frontend')} 
              onChange={() => toggleItem('frontend')} 
              className="checkbox checkbox-neutral" />{' '}
            Frontend
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-backend`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('backend')} 
              onChange={() => toggleItem('backend')} 
              className="checkbox checkbox-neutral" />{' '}
            Backend
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor={`${formId}-mobile`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('mobile')} 
              onChange={() => toggleItem('mobile')} 
              className="checkbox checkbox-neutral" />{' '}
            Mobile
          </label>
        </fieldset>

        <div className="divider"></div>

        <p className="mb-2">Languages:</p>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-javascript`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('javascript')} 
              onChange={() => toggleItem('javascript')} 
              className="checkbox checkbox-neutral" />{' '}
            Javascript
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-typescript`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('typescript')} 
              onChange={() => toggleItem('typescript')} 
              className="checkbox checkbox-neutral" />{' '}
            Typescript
          </label>
        </fieldset>

        
        <fieldset className="mb-1">
          <label htmlFor={`${formId}-python`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('python')} 
              onChange={() => toggleItem('python')} 
              className="checkbox checkbox-neutral" />{' '}
            Python
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-ruby`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('ruby')} 
              onChange={() => toggleItem('ruby')} 
              className="checkbox checkbox-neutral" />{' '}
            Ruby
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor={`${formId}-php`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('php')} 
              onChange={() => toggleItem('php')} 
              className="checkbox checkbox-neutral" />{' '}
            PHP
          </label>
        </fieldset>

        <div className="divider"></div>

        <p className="mb-2">Frameworks:</p>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-react`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('react')} 
              onChange={() => toggleItem('react')} 
              className="checkbox checkbox-neutral" />{' '}
            React
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-react-native`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('react-native')} 
              onChange={() => toggleItem('react-native')} 
              className="checkbox checkbox-neutral" />{' '}
            React Native
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-ionic`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('ionic')} 
              onChange={() => toggleItem('ionic')} 
              className="checkbox checkbox-neutral" />{' '}
            Ionic
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-electron`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('electron')} 
              onChange={() => toggleItem('electron')} 
              className="checkbox checkbox-neutral" />{' '}
            Electron
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-vue`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('vue')} 
              onChange={() => toggleItem('vue')} 
              className="checkbox checkbox-neutral" />{' '}
          Vue
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-angular`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('angular')} 
              onChange={() => toggleItem('angular')} 
              className="checkbox checkbox-neutral" />{' '}
            Angular
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-flask`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('flask')} 
              onChange={() => toggleItem('flask')} 
              className="checkbox checkbox-neutral" />{' '}
            Flask
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-web2py`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('web2py')} 
              onChange={() => toggleItem('web2py')} 
              className="checkbox checkbox-neutral" />{' '}
            Web2py
          </label>
        </fieldset>        
 
        <fieldset className="mb-1">
          <label htmlFor={`${formId}-django`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('django')} 
              onChange={() => toggleItem('django')} 
              className="checkbox checkbox-neutral" />{' '}
            Django
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-ruby-on-rails`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('ruby-on-rails')} 
              onChange={() => toggleItem('ruby-on-rails')} 
              className="checkbox checkbox-neutral" />{' '}
            Ruby on Rails
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-laravel`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('laravel')} 
              onChange={() => toggleItem('laravel')} 
              className="checkbox checkbox-neutral" />{' '}
            Laravel
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-code-igniter`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('code-igniter')} 
              onChange={() => toggleItem('code-igniter')} 
              className="checkbox checkbox-neutral" />{' '}
            Code Igniter
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-wordpress`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('wordpress')} 
              onChange={() => toggleItem('wordpress')} 
              className="checkbox checkbox-neutral" />{' '}
            Wordpress
          </label>
        </fieldset>

        <div className="divider"></div>

        <p className="mb-2">Other:</p>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-redux`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('redux')} 
              onChange={() => toggleItem('redux')} 
              className="checkbox checkbox-neutral" />{' '}
            Redux
          </label>
        </fieldset>

        <fieldset className="mb-1">
          <label htmlFor={`${formId}-mobx`}>
            <input 
              type="checkbox" 
              checked={checkIfItemChecked('mobx')} 
              onChange={() => toggleItem('mobx')} 
              className="checkbox checkbox-neutral" />{' '}
            Mobx
          </label>
        </fieldset>
      </form>
    </aside>
  )
}