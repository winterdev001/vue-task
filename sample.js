new Vue({
    // By specifying an HTML id in this el, an instance of Vue.js is imported in the DOM of that id
    el: '#app',
    // data is an attribute (value) of the defined Vue.js instance
    data: {
        name: 'ordinary Joe',
        course: 'Web Engineer Course',
        acceptancePeriod: 'January 2019',
        defaultLastId: 3,
        students: [
            { id: 1, name: 'Noro Hiroyoshi', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
            { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
            { id: 3, name: 'Saito Kazuki', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
            
        ]
    },
    // In methods, describe the method you want to use for the instance of Vue.js
    methods: {
        addStudent: function () {
            // AddStudent method in this function () {}
            // Write the processing of (a function in which the value entered in the input field and a ID value (ID value + 1 value registered last) newly appears)
            var lastPosition = this.students.length - 1;
            let id = this.students[lastPosition].id + 1;
            let name = this.name
            let course = this.course
            let acceptancePeriod = this.acceptancePeriod
            this.students.push({ id,name, course, acceptancePeriod })
            // console.log(name);
        }
    }
})