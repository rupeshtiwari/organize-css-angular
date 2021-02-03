import { StyleService } from './style.service';

export function initStyles(styleService: StyleService) {
  return () => {
    styleService.execute();
  };
}
