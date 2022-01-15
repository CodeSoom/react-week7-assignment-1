import { useState } from 'react';

export default function useForm({ initialValues = {}, onSubmit }) {
  const keys = Object.keys(initialValues);
  const stateAndSetterEntries = keys.map((key) => [key, useState(initialValues[key])]);
  const stateAndSettersMap = Object.fromEntries(stateAndSetterEntries);

  const values = Object.fromEntries(stateAndSetterEntries.map(([key, [state]]) => [key, state]));

  const changeValues = (newValues) => {
    Object.keys(newValues).forEach((key) => {
      stateAndSettersMap[key][1](newValues[key]);
    });
  };

  const submit = () => {
    onSubmit(values);
  };

  return {
    values,
    submit,
    changeValues,
  };
}
