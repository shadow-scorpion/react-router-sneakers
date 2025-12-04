
export const Loggin = () => {

    return (
        <div>
            <form>
                <label form={'name'}>
                    Your name
                    <input id={'name'} type={'text'} />
                </label>
                <label form={'lastName'}>
                    Last name
                    <input id={'lastName'} type={'text'}/>
                </label>
            </form>
        </div>
    );
};

export default Loggin;