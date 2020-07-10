import Popper from 'popper.js/dist/umd/popper';

const popperPositionMaps = {
    'top': 'top',
    'topstart': 'top-start',
    'topend': 'top-end',
    'left': 'left',
    'leftstart': 'left-start',
    'leftend': 'left-end',
    'bottom': 'bottom',
    'bottomstart': 'bottom-start',
    'bottomend': 'bottom-end',
    'right': 'right',
    'rightstart': 'right-start',
    'rightend': 'right-end',
}

let popper = null;
const valueMap = {};
const mouseover = (el, binding) => {
    const { arg } = binding;
    if (el.offsetWidth < el.scrollWidth) {
        const div = document.createElement('div');
        div.className = "my-tooltip-popper";
        const content = document.createElement('div');
        div.append(content);
        const arrow = document.createElement('div');
        arrow.className = 'my-tooltip-arrow';
        content.append(arrow);
        const span = document.createElement('div');
        span.innerHTML = valueMap[el.sy];
        span.className = 'my-tooltip-inner';
        content.append(span);
        const reference = el;
        document.body.append(div);
        popper = new Popper(
            reference,
            div,
            {
                modifiers: {
                    computeStyle: {
                        gpuAcceleration: false,
                    },
                    preventOverflow: {
                        boundariesElement: 'window'
                    }
                },
                placement: arg ? popperPositionMaps[arg.toLowerCase()] : 'bottom',
            }
        )
    }
}
const mouseout = () => {
    if (popper) {
        popper.destroy();
    }
    const my = document.querySelector('.my-tooltip-popper');
    if (my) {
        my.parentNode.removeChild(my);
    }
}

const ellipsisShowToolTip = {
    bind(el, binding, vnode) {
        el.style.display = 'block';
        el.style.overflow = 'hidden';
        el.style.textOverflow = 'ellipsis';
        el.style.whiteSpace = 'nowrap';
        el.addEventListener('mouseover', mouseover.bind(this, el, binding, vnode), false);
        el.addEventListener('mouseout', mouseout, false)
    },
    componentUpdated(el, binding) {
        valueMap[el.sy] = binding.value;
    },
    inserted(el, binding, vnode) {
        const sy = Symbol(vnode);
        el.sy = sy;
        valueMap[sy] = binding.value;
    },
    unbind(el) {
        delete valueMap[el.sy];
        el.removeEventListener('mouseover', mouseover);
        el.removeEventListener('mouseout', mouseout)
    }
}

export default ellipsisShowToolTip