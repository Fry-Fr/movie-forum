import loading from '../assets/1490.gif'
const LoadingSpinner = () => {
    return(
        <>
        <img alt="loading"
        src={loading}
        style={{
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'margin': '1rem auto'
        }}
         />
        </>
    )
};

export default LoadingSpinner;