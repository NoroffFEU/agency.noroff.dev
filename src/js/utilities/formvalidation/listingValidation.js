// form validation for create listings
export function validateCompanyId(companyId) {
    return companyId !== "";
}
  
export function validateJobTitle(title) {
    return title.length >= 5 && title.length <= 50;
}
  
export function validateTags(tags) {
    if (!tags.trim()) return false;
    const tagList = tags.split(',').map(tag => tag.trim());
    return tagList.every(tag => tag.length > 0 && !/\s/.test(tag));
  }
  
  export function validateRequirements(requirements) {
    if (!requirements.trim()) return false;
    const requirementsList = requirements.split(',').map(req => req.trim());
    return requirementsList.every(req => req.length > 0 && !/\s/.test(req));
  }
  

  
export function validateFutureDate(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    return inputDate > currentDate;
}
  
export function validateDescription(description) {
    return description.length >= 10;
}
  