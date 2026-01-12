// function Student(){
//     return (
//     <>
//         <h2>Name:Sanket</h2>
//         <h2>Name:Ashok</h2>
//         <h2>Name:Gopal</h2>
//         <h2>Name:Darshan</h2>
//         <h2>Name:Hitesh</h2>
//     </>
//      )
// }

/* --------------------------------------- */

// function Student(props)
// {
//     return (
//         <>
//             <h2>Name:{props.name}</h2>
//             <h2>Subject:{props.sub}</h2>
//             <h2>City:{props.city}</h2>
//         </>
//     );
// }


function Student({name, sub, city})
{
    return (
        <>
            <h2>Name:{name}</h2>
            <h2>Subject:{sub}</h2>
            <h2>City:{city}</h2>
        </>
    );
}

export default Student;