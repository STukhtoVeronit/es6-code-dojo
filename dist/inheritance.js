'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(title) {
        _classCallCheck(this, Task);

        this.title = title;
        this.done = false;
        console.log('working');
    }

    _createClass(Task, [{
        key: 'dosomething',
        value: function dosomething() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'message';

            console.log(message);
        }
    }]);

    return Task;
}();

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask(title) {
        _classCallCheck(this, SubTask);

        return _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));
    }

    return SubTask;
}(Task);

var task = new Task('Learn js');
var subtask = new SubTask('Learn es6');

console.log(task);
console.log(subtask);