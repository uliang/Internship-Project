import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table To Display Question Details
export default function Table() {
    const [state, setState] = React.useState({
        //Columns Of Table
        columns: [
            { title: 'Test', field: 'test' },
            { title: 'No.', field: 'number' },
            { title: 'Questions', field: 'questions' },
            { title: 'Reference Answer', field: 'refans' },
        ],
        //End Of Columns Of Table

        //Row Data Of Table, Data Was Obtained From Ontology From U Tang Liang
        data: [
            { test: 'Test 1', number: '1', questions: 'When does Google plan to reopen "more buildings in more cities"', refans: 'July 6' },
            { number: '2', questions: 'What plans have both Twitter and Facebook announced going forward.', refans: 'announced plans to support remote work on a permanent basis going forward.' },
            { number: '3', questions: 'What was the goal Pichai wrote in his blog post.', refans: '"We will have rigorous health and safety measures in place to ensure social distancing and sanitization guidelines are followed,"' },
            { number: '4', questions: 'How much is Google paying to take over New York Citys Chelsea Market.', refans: '$2.4 billion' },
            { number: '5', questions: 'How much longer can those working from home choose to do so.', refans: 'those working from home due to the pandemic could continue to do so through the end of the year if they chose.' },
            { number: '6', questions: 'How much of an allowance would workers recieve for working from home.', refans: '$1,000' },
            { number: '7', questions: 'Coinbase would be a remote-first company following the pandemic, True or False', refans: 'True' },
            { test: 'Test 2', number: '1', questions: 'When did the Australian Foreign Minister initially voice support for an investigation.', refans: 'Sunday morning television show in late April.' },
            { number: '2', questions: 'Why did China begin the campaign to punish Australia', refans: 'calls for an international investigation into the origins of the coronavirus pandemic' },
            { number: '3', questions: 'When did China slap tariffs of more than 80% on Australian barley imports.', refans: 'May 17' },
            { number: '4', questions: 'How much money does the total trade between China and Australia amount to in 2018', refans: '$214 billion' },
            { number: '5', questions: 'Why is Australia worried about their economic relationship with China.', refans: 'Australia faces the very real prospect of a coronavirus-related recession' },
            { number: '6', questions: 'What about Australia is seen by experts as a test case.', refans: 'can a liberal democracy with close trade ties to the authoritarian regime in Beijing still maintain an independent foreign policy' },
            { number: '7', questions: 'What did experts say about the relationship between the two countries.', refans: 'deep cracks are emerging in relations between the two countries.' },
        ],
        //End Of Row Data Of Table
    });

    return (
        <MaterialTable
            title="List Of Tests"
            columns={state.columns}
            data={state.data}
            editable={{
                //Add Row Function
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                //End Of Add Row Function

                //Edit Row Data Function
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                //End Of Edit Row Data Function

                //Delete Row Function
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                //End Of Delete Row Function
            }}
            //Options To Customize Table Style Etc.
            options={{
                headerStyle: {
                    fontSize: '11px'
                },
            }}
            //End Of Options To Customize Table Style Etc.
        />
    );
}
