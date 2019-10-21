import CheckPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = CheckPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );

  expect(propError).toBeUndefined();
};
