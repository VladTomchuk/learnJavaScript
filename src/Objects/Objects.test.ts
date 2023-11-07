// export const Citizens = [
//     {
//         sex: 'MALE',
//         firstName: 'Vlad',
//         lastName: 'Tomchuk',
//         age: 31,
//         birthdayDate: {
//             day: 12,
//             month: 11,
//             year: 1992,
//         },
//         nationality: 'Ukraine',
//         address: {
//             street: 'Rambla de Prim',
//             building: {
//                 number: 80,
//                 stairs: 'BIS',
//                 stage: 6,
//             },
//             city: 'Barcelona',
//             postcode: '08019',
//             province: 'Catalunya',
//         }
//     },
//     {
//         sex: 'FEMALE',
//         firstName: 'Janet',
//         lastName: 'Murfy',
//         age: 50,
//         birthdayDate: {
//             day: 25,
//             month: 8,
//             year: 1972,
//         },
//         nationality: 'France',
//         address: {
//             street: 'Le feer',
//             building: {
//                 number: 167,
//                 stairs: 'A',
//                 stage: 13,
//             },
//             city: 'Paris',
//             postcode: '11022',
//             province: 'Burgundy',
//         },
//     }
// ]

import {CitizensType} from "./Objects";

export let Citizens: CitizensType[];
beforeEach(()=>{
    Citizens = [
        {
            sex: 'MALE',
            firstName: 'Vlad',
            lastName: 'Tomchuk',
            age: 31,
            birthdayDate: {
                day: 12,
                month: 11,
                year: 1992,
            },
            nationality: 'Ukraine',
            address: {
                street: 'Rambla de Prim',
                building: {
                    number: 80,
                    stairs: 'BIS',
                    stage: 6,
                },
                city: 'Barcelona',
                postcode: '08019',
                province: 'Catalunya',
            }
        },
        {
            sex: 'FEMALE',
            firstName: 'Janet',
            lastName: 'Murfy',
            age: 50,
            birthdayDate: {
                day: 25,
                month: 8,
                year: 1972,
            },
            nationality: 'France',
            address: {
                street: 'Le feer',
                building: {
                    number: 167,
                    stairs: 'A',
                    stage: 13,
                },
                city: 'Paris',
                postcode: '11022',
                province: 'Burgundy',
            },
        }
    ]
})
test('Structure of Object Citizen works well',()=>{

    expect(Citizens[0].firstName).toBe('Vlad')

})