import Schema, { RuleItem } from '@/components/custom-async-validator';
import { getEmptyRuleItem } from '@/utils/checkData';
// const descriptor: Record<string, RuleItem> = {
//   name: {
//     type: 'string',
//     required: true,
//     validator: (rule, value) => value === 'muji',
//   },
//   age: {
//     type: 'number',
//     asyncValidator: (rule, value) => {
//       return new Promise((resolve, reject) => {
//         if (value < 18) {
//           reject('too young'); // reject with error message
//         } else {
//           resolve();
//         }
//       });
//     },
//   },
// };
// const validator = new Schema(descriptor);
// validator.validate({ name: 'muji' }, (errors, fields) => {
//   if (errors) {
//     // validation failed, errors is an array of all errors
//     // fields is an object keyed by field name with an array of
//     // errors per field
//     // return handleErrors(errors, fields);
//   }
//   // validation passed
// });

// // PROMISE USAGE
// validator
//   .validate({ name: 'muji', age: 16 })
//   .then(() => {
//     // validation passed or without error message
//   })
//   .catch(({ errors, fields }) => {
//     // return handleErrors(errors, fields);
//   });

const itemData = {
  id: 'Parent-thsumbmguqtozinzwiejx',
  type: 3,
  required: true,
  showInDetail: true,
  showEmptyItem: 1,
  enumDataItems: [
    { id: 'gdtgeuaszkntaoxloqzyw' },
    { id: 'uyvucfswoogbpgrvrrlmv' },
  ],
};

const descriptor: Record<string, RuleItem> = {
  fieldDesc: getEmptyRuleItem('字段描述'),
  // enumDataItems: {
  //   type: 'array',
  //   required: true,
  //   len: 4,
  //   fields: {
  //     0: {
  //       type: 'object',
  //       required: true,
  //       fields: {
  //         enumText: { type: 'string', required: true },
  //         enumValue: { type: 'string', required: true },
  //       },
  //     },
  //     1: {
  //       type: 'object',
  //       required: true,
  //       fields: {
  //         enumText: { type: 'string', required: true },
  //         enumValue: { type: 'string', required: true },
  //       },
  //     },
  //   },
  // },
};

const validator = new Schema(descriptor);
validator
  .validate(itemData)
  .then(() => {
    // validation passed or without error message
  })
  .catch(({}) => {});

export default function Test() {
  return <div>validate</div>;
}
