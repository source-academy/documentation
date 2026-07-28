/**
 * Represents the type of parameter
 */
export type ParamType = 'regular' | 'optional' | 'rest';

interface BaseParam<T extends ParamType> {
  paramType: T;
  name: string;
  type: string;
}

/**
 * Represents a rest parameter
 */
export type RestParam = BaseParam<'rest'>;

/**
 * Represents an optional parameter, i.e `x1?: number`.
 */
export type OptionalParam = BaseParam<'optional'>;

/**
 * Represents a regular parameter
 */
export interface RegularParam extends BaseParam<'regular'> {
  /**
   * String representation of the default value of the parameter, if present.
   */
  defaultValue?: string;
}

/**
 * Represents the complete specification for a parameter.
 */
export type ParamSpecifier = RegularParam | RestParam | OptionalParam;

/**
 * Represents an entry documenting a function
 */
export interface FunctionDocumentation {
  kind: 'function';

  /**
   * String representation of the return type of the function.
   */
  retType: string;

  /**
   * HTML description of the function.
   */
  description: string;

  /**
   * The entries describing the parameters of the function.
   */
  params: ParamSpecifier[];
}

/**
 * Represents a doc entry documenting a variable
 */
export interface VariableDocumentation {
  kind: 'variable';

  /**
   * String representation of the type of the variable.
   */
  type: string;

  /**
   * HTML description of the variable.
   */
  description: string;
}

/**
 * Represents an entry for something that isn't
 * a variable or function.
 */
export interface UnknownDocumentation {
  kind: 'unknown';
}

export type DocumentationEntry = FunctionDocumentation | VariableDocumentation | UnknownDocumentation;
