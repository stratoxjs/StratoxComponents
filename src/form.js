
/**
 * Stratox form component
 */
export function form(data, container, $, builder)
{
    let out = '';
    out += `<form class="flex flex-wrap gap-x-15" action="${data.action}" method="${data.method}">`;
    builder.groupFactory(function (o, val) {
        out += o;
    });
    out += `
    </form>
    `;
    return out;
}
