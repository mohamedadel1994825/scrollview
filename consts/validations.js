////////////////validation file
/**
 * @description validate required
 */
export const required = value => (value ? undefined : "Required");

/**
 * @description validate Max length
 *
 */

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

/**
 * @description validate MIN length
 *
 */

export const minValue = min => value =>
  value && value.length < min ? `Must be at least ${min}` : undefined;
/**
 * @description validate medicalCheckUpValidation length
 *
 */
export const medicalChkUpValidationRange = (min, max) => value =>
  (value && parseFloat(value) < min) || parseFloat(value) > max
    ? `Not Acceptable` //`Range Must beetween ${min} and ${max}`
    : undefined;
/**
 * @description validate medicalCheckUpValidation Weight
 *
 */
export const medicalChkUpWeightValidation = max => value =>
  value && parseFloat(value) < max
    ? `Not Acceptable` //`Must be less than ${max}`
    : undefined;
/**
 * @description validate medicalCheckUpValidation Reguler or not General Appearance(*) and Pulse Status(*)

 *
 */
export const canNotExceedValidation = max => value =>
  value && value.length != max ? `Must be ${max} characters` : undefined;

export const medicalChkUpAcceptedValidation = value =>
  value &&
  (value == "770cdb92-9ecf-4e70-93c6-3bb0e2eaec38" ||
    value == "55c86664-fe18-41c4-9090-244367d3fb36")
    ? `Will defer for one day!`
    : undefined;

const validations = {
  required,
  maxLength,
  minValue,
  medicalChkUpValidationRange,
  medicalChkUpWeightValidation,
  medicalChkUpAcceptedValidation,
  canNotExceedValidation
};
export default validations;
