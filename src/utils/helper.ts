import { FORM_FIELDS } from "./constants";
import { EmployeeProps } from "./types";

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function formatDate(dateStr: string, format: string = 'YYYY-MM-DD'): string {
  if (!dateStr) return '';;
  const pad = (n: number): string => n.toString().padStart(2, '0');
  let date = new Date(dateStr);
  const map: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, token => map[token]);
}

export const formHandlerProps = (fieldName: string, dobField?: any) => {
  switch (fieldName) {
    case FORM_FIELDS.FIRSTNAME: {
      return {
        required: `First name is required`,
        minLength: {
          value: 6,
          message: 'Minimum character length is 6'
        },
        maxLength: {
          value: 10,
          message: 'Maximum character length is 10'
        }
      }
    }
    case FORM_FIELDS.LASTNAME: {
      return {
        required: `Last name is required`,
        minLength: {
          value: 6,
          message: 'Minimum character length is 6'
        },
        maxLength: {
          value: 10,
          message: 'Maximum character length is 10'
        }
      }
    }
    case FORM_FIELDS.EMAIL: {
      return {
        required: `Email address is required`,
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid email address"
        }
      }
    }
    case FORM_FIELDS.PHONE: {
      return {
        required: `Phone number is required`,
        pattern: {
          value: /^\+65(6|8|9)\d{7}$/,
          message: "Please enter a valid singapore number"
        }
      }
    }
    case FORM_FIELDS.DOB: {
      return {
        valueAsDate: true,
        required: `Date of birth is required`,
      }
    }
    case FORM_FIELDS.GENDER: {
      return {
        required: `Gender is required`
      }
    }
  }
};

/* 
  Function to validate two object has same valid
  Gets two object parameters

*/
export const isFormValuesChanged = (obj1:Record<string, any>, obj2:Record<string, any>) => {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  let isValid = false;
  for(let index of Object.keys(obj1)){
    let keyOne = obj1[index];
    let keyTwo = obj2[index];
    if(index === 'dob' || index === 'joinedDate'){
      keyOne = formatDate(keyOne);
      keyTwo = formatDate(keyTwo);
    }
    if(keyOne !== keyTwo){
      isValid = true;
    }
  }
  return isValid;
}