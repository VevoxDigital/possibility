'use strict'

/**
  * @class Possibility
  * A possibility, which may or may not contain data, because sometimes, `null` and `undefined`
  * have different meanings.
  */
function Possibility (data) {
  this.data = data
}

/**
  * @method #isDefined()
  * Determines if the value in this Possibility is defined. The value still may be null.
  *
  * @return boolean
  */
Possibility.prototype.isDefined = function () {
  return this.data !== undefined
}

/**
  * @method #isPresent()
  * Determines if the value in this Possibility is present (i.e. not null or undefined).
  *
  * @return boolean
  */
Possibility.prototype.isPresent = function () {
  return this.isDefined() && this.data !== null
}

/**
  * @method #isOk()
  * Determines if the value is this Possibility is ok (i.e. is "truthy")
  *
  * @return boolean
  */
Possibility.prototype.isOk = function () {
  return !!this.data
}

/**
  * @method #get()
  * Gets the value, raising an error if the value is not present
  *
  * @return *
  */
Possibility.prototype.get = function () {
  if (!this.isPresent()) throw new Error('Value not present')
  return this.data
}

/**
  * @method #getOrUndefined()
  * Gets the value or `undefined` if one was not present
  *
  * @return *|undefined
  */
Possibility.prototype.getOrUndefined = function () {
  return this.isPresent() ? this.data : undefined
}

/**
  * @function empty()
  * Creates a new possibility with no present data.
  *
  * @return Possibility
  */
Possibility.empty = function () {
  return Possibility.of()
}

/**
  * @function of
  * Creates a new possibility with the given data, which may be `null` or `undefined`.
  * Alias for `new Possibility(data)`.
  *
  * @param data <optional> The data
  * @return Possibility
  */
Possibility.of = function (data) {
  return new Possibility(data)
}

/**
  * @function ofOk
  * Creates a new possibility with the given data if the data is "truthy", otherwise an empty
  * possibility is created.
  *
  * @param data The data
  * @return Possibility
  */
Possibility.ofOk = function (data) {
  return data ? Possibility.of(data) : Possibility.empty()
}

exports = module.exports = Possibility
