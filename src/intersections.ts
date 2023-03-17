type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

// it's kind of like inheritance, you have to declare both kind of methods
let textBox: UIWidget = {
    drag:()=>{},
    resize: () => { }
};