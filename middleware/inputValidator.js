const { check, validationResult, sanitize, validator } = require('express-validator')

const locales = ['am-Am', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY', 'bg-BG', 'bn-BD', 'cs-CZ', 'da-DK', 'de-DE', 'de-AT', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK', 'en-MO', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-PK', 'en-RW', 'en-SG', 'en-SL', 'en-UG', 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'es-CL', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE', 'fa-IR', 'fi-FI', 'fj-FJ', 'fo-FO', 'fr-BE', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'ne-NP', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-HK', 'zh-MO', 'zh-TW']
const organizationValidationRules = () => {
  return [
    // username must be an email
    check('organization')
        .not().isEmpty().withMessage("Please provide organization name")
        .bail()
        .isLength({min:3}).withMessage("Organization name has to be more than 3 charcaters long")
        .bail()
        .trim()
        .escape(),
    check('website_url')
        .not().isEmpty().withMessage("Please provide website name")
        .trim()
        .escape().escape().withMessage("Illegal characters found")
        .bail()
        .isURL().withMessage("Please provide a valid website URL"),
    /*check('username')
        .not().isEmpty().withMessage("Username cannot be empty")
        .bail()
        .isLength({min:3}).withMessage("Organization name has to be more than 3 charcaters long")
        .bail()
        .trim()
        .escape().escape().withMessage("Illegal characters found"),*/
    check('email')
        .not().isEmpty().withMessage("Please provide organization email")
        .bail()
        .isEmail()
        .bail()
        .normalizeEmail(),
    check('phone_number1')
        .not().isEmpty().withMessage("Please provide a valid phone number")
        .bail()
        .isMobilePhone(locales).withMessage("Please provide valid phone number format- +[countrycode][phone number]"),
    
    check('phone_number2')
        .not().isEmpty().withMessage("Please provide a valid phone number")
        .bail()
        .isMobilePhone(locales).withMessage("Please provide valid phone number format- +[countrycode][phone number]"),
    
  ]
}

const searchSanitizer = () => {
  return [
    // username must be an email
    check('search')
        .not().isEmpty().withMessage("Please provide a valid phone number")
        .bail()
        .isLength({min:3}).withMessage("Search value has to be at least 3 charater long")
        .bail()
        .trim()
        .escape(),
    
  ]
}

const coalitionSanitizer = () => {
  return [
    // username must be an email
    check('search')
        .not().isEmpty().withMessage("Please provide a valid phone number")
        .bail()
        .isLength({min:3}).withMessage("Search value has to be at least 3 charater long")
        .bail()
        .trim()
        .escape(),
    
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  console.log(extractedErrors)
  console.log(req.body)
  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  organizationValidationRules,
  validate,
  searchSanitizer,
  coalitionSanitizer
 
}