import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { SWPerson } from "../../types";

type Props = {
  data: SWPerson;
};

const CharacterCard = ({ data }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader title={data.name} />
        <CardContent>
          <Stack spacing={2} alignItems="stretch">
            <Stack direction="row" justifyContent="space-between">
              <Typography>Height</Typography>
              <Typography>{data.height}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Weight</Typography>
              <Typography>{data.mass}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Birth Year</Typography>
              <Typography>{data.birth_year}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
