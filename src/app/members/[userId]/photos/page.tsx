export default function page() {
  return (
    <>
      <CardHeader className='text-2xl font-medium text-main'>
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  )
}