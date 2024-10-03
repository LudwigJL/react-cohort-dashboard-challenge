import headerIcon from "/title-header.svg";


export default function Header(){
    return (
        <>
        <div className="head-row">
        <div className="head-icon">
          <img src={headerIcon} />
        </div>
        <p3>Cohort Manager</p3>
      </div>
    </>
    )
}