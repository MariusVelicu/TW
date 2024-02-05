function Employee (props) {
  let {item} = props
  return (
    <div className='employee'>
      {item.name} {item.job} {item.salary}
    </div>
  )

}

export default Employee
