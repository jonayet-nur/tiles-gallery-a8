import {Label, SearchField} from "@heroui/react";

export function SearchOpt() {
  return (
    <div className="w-100 space-y-4 mt-3">
      <SearchField fullWidth name="search">
        <Label className="text-center"></Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>
  );
}