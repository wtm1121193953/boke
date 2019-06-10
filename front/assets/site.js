$(document).ready(function () {
    preventForm();
    axiosHeader();
});


/**
 * 阻止form表单跳转
 * @type {Element}
 */
function preventForm() {
    let forms = $("#submitForm");
    forms.find('button').click(function (e) {
        e.preventDefault();
    });
}


function axiosHeader() {

    if (typeof axios != 'undefined') {
        axios.defaults.baseURL = 'http://www.thunk.com';
        if (typeof csrfToken != 'undefined') {
            axios.defaults.headers['X-CSRF-Token'] = csrfToken;
        }

    }

}
