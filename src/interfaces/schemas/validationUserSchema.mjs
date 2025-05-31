import { ROLES } from "../../domain/constants/roles.mjs"

export const validateUser = {
  email: {
    isEmail:{
      errorMessage: "Invalid emai"
    },
    notEmpty:{
      errorMessage: "The EMAIL field needs to be filled"
    }
  },
  password:{
    notEmpty:{
      errorMessage: "The password field needs to be filled"
    },
     isLength: {
      options: { min: 6 },
      errorMessage: "Password must be at least 6 characters long",
    },
    matches:{
      options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/, 
      errorMessage: "The PASSWORD must contain uppercase, lowercase and special characters" 
    },
  },
  firstName:{
    isString:{
      errorMessage: "The FristName must be of type String"
    },
    notEmpty:{
      errorMessage: "The FristName field needs to be filled"
    },
    isLength:{
      options:{
        min:3,
        max:32
      },
      errorMessage:"FristName must be between 3 and 32 characters"
    }
  },
  lastName:{
    isString:{
      errorMessage: "The LastName must be of type String"
    },
    notEmpty:{
      errorMessage: "The LastName field needs to be filled"
    },
    isLength:{
      options:{
        min:3,
        max:40
      },
      errorMessage:"LastName must be between 3 and 40 characters"
    }
  },
  role:{
    isString:{
      errorMessage: "The ROLE must be of type String"
    },
    isIn: {
    options: [ROLES],
    errorMessage: "Role inválida"
  }
  },
  crm:{
    optional: true,
    isString:{
      errorMessage: "The CRM must be of type String"
    }
  }
}

export const validateUpdateUser = {
  firstName:{
    optional: true,
    isString:{
      errorMessage: "The FristName must be of type String"
    },
    notEmpty:{
      errorMessage: "The FristName field needs to be filled"
    },
    isLength:{
      options:{
        min:3,
        max:32
      },
      errorMessage:"FristName must be between 3 and 32 characters"
    }
  },
  lastName:{
    optional: true,
    isString:{
      errorMessage: "The LastName must be of type String"
    },
    notEmpty:{
      errorMessage: "The LastName field needs to be filled"
    },
    isLength:{
      options:{
        min:3,
        max:40
      },
      errorMessage:"LastName must be between 3 and 40 characters"
    }
  },
  role:{
    optional: true,
    isString:{
      errorMessage: "The ROLE must be of type String"
    },
    isIn: {
    options: [ROLES],
    errorMessage: "Role Invalid"
  }
  },
  crm:{
    optional: true,
    isString:{
      errorMessage: "The CRM must be of type String"
    }
  }
}