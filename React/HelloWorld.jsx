const root =
ReactDom.createRoot(document.getElementById('root'));
root.render(<h1>Hello, World!</h1>)


const name = 'Albert Williams';
const elemento = <h1>Hello, {name}</h1>;


function formatname(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Vladimir',
    lastName: 'Williams'
};

const element = (
    <h1>
    Hello, {formatname(user)}
    </h1>
);