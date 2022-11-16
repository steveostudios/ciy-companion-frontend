import styled from "@emotion/styled"
import SpinnerImage from "./../img/icons/spinner.svg"

export const Spinner = () => {
  return (
    <Image src={SpinnerImage} alt="loading" />
  )
}

const Image = styled("img")({
  
})