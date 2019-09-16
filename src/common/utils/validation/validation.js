export const required = (value) => {
    
    if (value) {
        return null;
    }
    return 'Field Required'
};