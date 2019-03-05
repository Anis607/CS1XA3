import Browser
import Html exposing (Html, Attribute, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

-- MAIN
main =
 Browser.sandbox { init = init, update = update, view = view }

-- MODEL
type alias Model = 
  { word : String
  , word2 : String
  }


init : Model
init = 
  { word = ""
  , word2 = "" }

-- UPDATE
type Msg
  = String1 String
  | String2 String

update : Msg -> Model -> Model
update msg model =
  case msg of
    String1 newString ->
      { model | word = newString }
    String2 newString2 -> 
      { model | word2 = newString2 }




-- View
view : Model -> Html Msg
view model = 
  div[]
    [
    input [ placeholder "First String", value model.word, onInput String1 ] []
    , input [ placeholder "Second String", value model.word2, onInput String2 ] []
    , div [] [ text (model.word ++ " : " ++ model.word2) ]
    ]




           
