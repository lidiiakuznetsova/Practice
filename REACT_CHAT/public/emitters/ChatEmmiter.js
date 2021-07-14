function ChatEmiter(){
    EventEmiter.call(this);
    this._peers={};
}

ChatEmiter.prototype = Object.create(EventEmiter.prototype);