export interface containerElementProps {
  children: React.ReactNode,
  style?: Object,
  classnames?: string
};
export interface childrenProps {
  children: React.ReactNode
};

export interface EmployeeProps {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  gender:  string,
  dob: string,
  joinedDate: string,
  id: string | null
}

export interface FieldInputProps {
  label?: string,
  name?: string,
  onChange?: (e: any) => void,
  value?: string,
  error?: any,
  classNames?: string,
  placeholder?: string,
  type?: string,
  checked?: boolean,
  radioValues?: string[] | undefined
}

export interface NotificationProps {
  message: string
  type: string
  onClose: () => void
}