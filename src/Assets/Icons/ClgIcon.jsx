import clgIc from '../Images/logo/clgLogo.png'

function ClgIcon({ width, height }) {
    return <>
        <img src={clgIc} width={width ?? undefined} height={height ?? undefined} alt="#" />
    </>
}

export default ClgIcon