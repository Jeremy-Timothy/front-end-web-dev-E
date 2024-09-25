// arrow function
const message = () => {
    const title = "Personal Information";
    const name = "Jeremy Timothy";
    const age = 20;
    const status = "Single";
    const major = "Informatics";
    const faculty = "Computer Science";
    const address = "Jln. Tondano-Tomohon, Koya";
    const interest = "Gaming, Pokemon, Drawing";

    // gunakan backticks (`)
    return `
        <h2 style="text-align: center;">${title}</h2>
        <hr />
        <ul style="text-align: center;">
            <p><Strong>Name:</strong> ${name}</p>
            <p><Strong>Age:</strong> ${age}</p>
            <p><Strong>Status:</strong> ${status}</p>
            <p><Strong>Major:</strong> ${major}</p>
            <p><Strong>Faculty:</strong> ${faculty}</p>
            <p><Strong>Address:</strong> ${address}</p>
            <p><Strong>Interest:</strong> ${interest}</p>
        </ul>
    `
};




// export
export default message;