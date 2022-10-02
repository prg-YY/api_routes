import Image from "next/image"

function PetsPage() {
  return (
    <>
      {["1", "2", "3"].map((peth) => {
        return (
          <div key={peth}>
            <Image src={`/${peth}.jpg`} alt="pet" width="280" height="420" />
          </div>
        )
      })}
    </>
  )
}
export default PetsPage
