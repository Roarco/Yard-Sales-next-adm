import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  title: Yup.string().min(3).max(40).required(),
  price: Yup.number().min(5).max(10000).required(),
  description: Yup.string().min(3).max(180).required(),
  categoryId: Yup.number().required(),
  images: Yup.array().of(Yup.string()),
});

// import * as Joi from 'joi';

// const imageExtentions = ['image/png', 'image/jpg', 'image/jpeg'];

// const ProductSchema = Joi.object({
//   title: Joi.string().min(5).required(),
//   price: Joi.number().greater(0).precision(2).required(),
//   category: Joi.string().valid('1', '2', '3', '4', '5').required(),
//   description: Joi.string().required(),
//   images: Joi.any()
//     .custom(function (file, { error }) {
//       if (!file[0]) {
//         return error('file.required');
//       }

//       if (!imageExtentions.includes(file[0].type)) {
//         return error('file.invalid');
//       }

//       return file;
//     })
//     .messages({
//       'file.required': 'File is required',
//       'file.invalid': 'The file must be one of the following png, jpg or jpeg.',
//     }),
// });

export { ProductSchema };
