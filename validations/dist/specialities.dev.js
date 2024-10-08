"use strict";

var utils = require('../utils/utils');

var config = require('../config/config');

var addSpeciality = function addSpeciality(specialData) {
  var name = specialData.name,
      description = specialData.description,
      type = specialData.type,
      mainSpecialityId = specialData.mainSpecialityId,
      imageURL = specialData.imageURL;
  if (!name) return {
    isAccepted: false,
    message: 'name is required',
    field: 'name'
  };
  if (typeof name != 'string') return {
    isAccepted: false,
    message: 'Invalid name formate',
    field: 'name'
  };
  if (description && typeof description != 'string') return {
    isAccepted: false,
    message: 'Invalid description formate',
    field: 'description'
  };
  if (!type) return {
    isAccepted: false,
    message: 'Type is required',
    field: 'type'
  };
  if (!config.SPECIALITIES_TYPES.includes(type)) return {
    isAccepted: false,
    message: 'Invalid type value',
    field: 'type'
  };
  if (imageURL && !utils.isValidURL(imageURL)) return {
    isAccepted: false,
    message: 'Image URL format is invalid',
    field: 'imageURL'
  };
  if (type === 'SUB' && !mainSpecialityId) return {
    isAccepted: false,
    message: 'main speciality is required',
    field: 'mainSpecialityId'
  };
  if (type === 'SUB' && !utils.isObjectId(mainSpecialityId)) return {
    isAccepted: false,
    message: 'main speciality format is invalid',
    field: 'mainSpecialityId'
  };
  return {
    isAccepted: true,
    message: 'data is valid',
    data: specialData
  };
};

var updateSpeciality = function updateSpeciality(specialData) {
  var name = specialData.name,
      description = specialData.description,
      imageURL = specialData.imageURL;
  if (!name) return {
    isAccepted: false,
    message: 'name is required',
    field: 'name'
  };
  if (typeof name != 'string') return {
    isAccepted: false,
    message: 'Invalid name formate',
    field: 'name'
  };
  if (description && !utils.isNameValid(description)) return {
    isAccepted: false,
    message: 'Invalid description formate',
    field: 'description'
  };
  if (imageURL && !utils.isValidURL(imageURL)) return {
    isAccepted: false,
    message: 'Image URL format is invalid',
    field: 'imageURL'
  };
  return {
    isAccepted: true,
    message: 'data is valid',
    data: specialData
  };
};

var updateSpecialityShowStatus = function updateSpecialityShowStatus(specialData) {
  var isShow = specialData.isShow;
  if (typeof isShow != 'boolean') return {
    isAccepted: false,
    message: 'Invalid isShow format',
    field: 'isShow'
  };
  return {
    isAccepted: true,
    message: 'data is valid',
    data: specialData
  };
};

module.exports = {
  addSpeciality: addSpeciality,
  updateSpeciality: updateSpeciality,
  updateSpecialityShowStatus: updateSpecialityShowStatus
};