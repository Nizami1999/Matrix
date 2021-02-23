$(document).ready(function () {

    //users

    $("#chart").matrixchart({
        matrixDatas: [
            {
                "EmpId": 1,
                "name": "Farid",
                "image": "./img/farid.jpg",
                "pocketAxisValue": { "x": 5, "y": 3 }
            },
            {
                "EmpId": 2,
                "name": "Nizami",
                "image": "./img/nizami.jpg",
                "pocketAxisValue": { "x": 5, "y": 3 }
            },
            {
                "EmpId": 3,
                "name": "Habib",
                "image": "./img/habib.jpg",
                "pocketAxisValue": { "x": 3, "y": 5 }
            },
            {
                "EmpId": 4,
                "name": "Parviz",
                "image": "./img/perviz.jpg",
                "pocketAxisValue": { "x": 3, "y": 4 }
            }
        ],

        //customize

        height: 550,
        width: 550,
        noOfxLevels: 5,
        noOfyLevels: 5,
        xlabels: ['Beginner', 'Pre-intermediate', 'Intermediate', 'Up-intermediate', 'Advanced'],
        ylabels: ['Beginner', 'Pre-intermediate', 'Intermediate', 'Up-intermediate', 'Advanced'],
        xAxisName: "Web Development",
        yAxisName: "Data science",
        HSBhStart: 0,
        HSBhEnd: 161,
        valuepocketHeight: 48,
        valuepocketwidth: 96,
        xAxisIcon: "",
        yAxisIcon: ""
    });
});

