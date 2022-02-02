function solve() {
    let moduls = {};
    let addButtonElement = document.querySelector('.admin-view .action button');
    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let lectureNameElement = document.querySelector('input[name=lecture-name]');
        let lectureDateElement = document.querySelector('input[name=lecture-date]');
        let lectureModuleElement = document.querySelector('select[name=lecture-module]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value === 'Select module') {
            return;
        }

        if (!moduls[lectureModuleElement.value]) {
            moduls[lectureModuleElement.value] = [];
        }

        let currentLecture = {
            name: lectureNameElement.value,
            date: formatDate(lectureDateElement.value),
        };

        moduls[lectureModuleElement.value].push(currentLecture);

        lectureNameElement.value = '';
        lectureDateElement.value = '';
        lectureModuleElement.value = 'Select module';

        createTrainings(moduls);

        function createTrainings(moduls) {
            let modulsElement = document.querySelector('.modules');
            modulsElement.innerHTML = '';//така за махане на децата може, да не го използваме за създаване на елементи!!!
            for (const moduleName in moduls) {

                let moduleElement = createModule(moduleName);

                let lectureListElement = document.createElement('ul');

                //sort lectures
                let lectures = moduls[moduleName];
                lectures.sort((a, b) => a.date.localeCompare(b.date));
                lectures.forEach(lecture => {//тук можем да чейнем със сорта горе ако желаем

                    let lectureElement = createLecture(lecture.name, lecture.date, moduleName);
                    lectureListElement.appendChild(lectureElement);

                    let deleteButtonElement = lectureElement.querySelector('button');
                    deleteButtonElement.addEventListener('click', (e) => {

                        moduls[moduleName] = moduls[moduleName]
                            .filter(x => !(x.name == lecture.name && x.date == lecture.date));

                        if (moduls[moduleName].length === 0) {
                            delete moduls[moduleName];
                            //e.currentTarget.closest('.module').remove();
                            e.currentTarget.parentNode.parentNode.parentNode.remove();
                        } else {
                            e.currentTarget.parentNode.remove();
                        }

                    });

                });

                moduleElement.appendChild(lectureListElement);
                modulsElement.appendChild(moduleElement);
            }
        }
    });

    function createModule(name) {

        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let moduleHeadingElement = document.createElement('h3');
        moduleHeadingElement.textContent = `${name.toUpperCase()}-MODULE`;

        divElement.appendChild(moduleHeadingElement);

        return divElement;

    }

    function createLecture(name, date) {
        //create lecture
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${date}`;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButton);

        return liElement;
    }

    function formatDate(dateInput) {
        //2021-06-08T06:55
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }

};
