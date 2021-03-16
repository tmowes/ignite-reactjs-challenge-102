import { Button } from "./Button";
import '../styles/sidebar.scss';
import { GenreResponseProps } from "../App";

interface SideBarProps {
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export function SideBar(props: SideBarProps) {
  const { genres, handleClickButton, selectedGenreId } = props
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
