import asyncio
import sys
from loguru import logger
from utils.file_utils import file_exists, remove_duplicates
from utils.file_utils import file_exists, remove_duplicates

default_output_file_path = "../data/raw/consolidated_set.jsonl"

async def process_line(line):
    try:
        # Remove double quotes for JSONL
        line = line.replace('"', "'").strip()
        # Format into JSONL, fine-tuning format
        processed_line = f'{{"input": "<ADD DETAIL>", "output": "{line}"}}\n'
        return processed_line
    except Exception as e:
        logger.error(f"Error processing line: {line} ({e})")
        raise


async def process_file(file_path, output_file_path):
    try:
        # Read the input file
        with open(file_path, "r") as file:
            lines = file.readlines()

        # Process each line asynchronously
        processed_lines = await asyncio.gather(*[process_line(line) for line in lines])

        # Append to consolidated file
        with open(output_file_path, "a", newline="\n") as file:
            file.writelines(processed_lines)
            file.writelines(processed_lines)

        logger.success(f"File added to consolidation: {file_path}")
    except Exception as e:
        logger.error(f"Error processing file: {file_path} ({e})")
        raise


async def process_files(file_paths, output_file_path):
    try:
        file_exists(output_file_path)
        # Process each file asynchronously
        if isinstance(file_paths, list):
            await asyncio.gather(*[process_file(file_path, output_file_path) for file_path in file_paths])
        else:
            await asyncio.gather(process_file(file_paths, output_file_path))
    except Exception as e:
        logger.error(f"Error processing file list: {e}")
        raise


def consolidate_files(file_paths, output_file_path=default_output_file_path):
    # Create an asyncio event loop
    loop = asyncio.get_event_loop()

    # Run the file processing asynchronously
    loop.run_until_complete(process_files(file_paths, output_file_path))

    # Close the event loop
    loop.close()

    # Remove duplicate bullets
    remove_duplicates(output_file_path)

    logger.success(f"Consolidated, clean data has been output to: {output_file_path}")


if __name__ == "__main__":
    # Extract the file paths from command-line arguments
    file_paths = sys.argv[1:]

    consolidate_files(file_paths)
