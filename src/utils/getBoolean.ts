const str2bool = (value: string): boolean | void => {
  if (value && typeof value === "string") {
       if (value.toLowerCase() === "true") return true;
       if (value.toLowerCase() === "false") return false;
  }
}

export default str2bool;